#!/bin/bash

# Check if folder argument is provided
if [ $# -eq 0 ]; then
    echo "Error: No folder specified"
    echo "Usage: ./convert_png_to_webp.sh <folder_path> [quality]"
    echo "Quality: 1-100 (default: 90)"
    exit 1
fi

FOLDER="$1"
QUALITY="${2:-90}"  # Default quality is 90 if not specified

# Check if folder exists
if [ ! -d "$FOLDER" ]; then
    echo "Error: Folder '$FOLDER' does not exist"
    exit 1
fi

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp is not installed"
    echo "Install it with: sudo apt install webp"
    exit 1
fi

# Find all PNG files in the folder
png_files=("$FOLDER"/*.png "$FOLDER"/*.PNG)

# Check if any PNG files exist
if [ ! -e "${png_files[0]}" ]; then
    echo "No PNG files found in '$FOLDER'"
    exit 0
fi

echo "Found PNG files in '$FOLDER'"
echo "Quality setting: $QUALITY"
echo "Starting conversion..."
echo ""

# Counter for processed files
count=0
success=0
failed=0
total_original=0
total_compressed=0

# Process each PNG file
for input_file in "${png_files[@]}"; do
    # Skip if file doesn't exist (handles case where no .PNG files exist)
    [ -e "$input_file" ] || continue
    
    # Get filename without extension
    filename=$(basename "$input_file")
    filename_no_ext="${filename%.*}"
    
    # Create output filename
    output_file="$FOLDER/${filename_no_ext}.webp"
    
    # Check if output file already exists
    if [ -f "$output_file" ]; then
        echo "⚠️  Output file already exists: $(basename "$output_file")"
        read -p "Overwrite? (y/n): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo "Skipped: $(basename "$input_file")"
            echo ""
            continue
        fi
    fi
    
    ((count++))
    echo "[$count] Converting: $(basename "$input_file")"
    
    # Run cwebp conversion
    if cwebp -q "$QUALITY" "$input_file" -o "$output_file" 2>&1 | grep -v "^Saving"; then
        
        # Check if output file was created successfully
        if [ -f "$output_file" ]; then
            original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file")
            compressed_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file")
            
            # Calculate savings percentage
            savings=$(awk "BEGIN {printf \"%.1f\", (1 - $compressed_size/$original_size) * 100}")
            
            original_size_mb=$(du -h "$input_file" | cut -f1)
            compressed_size_mb=$(du -h "$output_file" | cut -f1)
            
            echo "✓ Success: $(basename "$output_file")"
            echo "  Original: $original_size_mb → WebP: $compressed_size_mb (${savings}% smaller)"
            
            ((success++))
            total_original=$((total_original + original_size))
            total_compressed=$((total_compressed + compressed_size))
        else
            echo "✗ Failed: $(basename "$input_file")"
            ((failed++))
        fi
    else
        echo "✗ Failed: $(basename "$input_file")"
        ((failed++))
    fi
    
    echo ""
done

# Calculate total savings
if [ $total_original -gt 0 ]; then
    total_savings=$(awk "BEGIN {printf \"%.1f\", (1 - $total_compressed/$total_original) * 100}")
    total_original_mb=$(echo "scale=2; $total_original / 1048576" | bc)
    total_compressed_mb=$(echo "scale=2; $total_compressed / 1048576" | bc)
else
    total_savings=0
    total_original_mb=0
    total_compressed_mb=0
fi

# Summary
echo "======================================"
echo "Conversion Complete!"
echo "Total files processed: $count"
echo "Successful: $success"
echo "Failed: $failed"
echo "Total size: ${total_original_mb}MB → ${total_compressed_mb}MB"
echo "Total savings: ${total_savings}%"
echo "======================================"