#!/bin/bash

# Check if folder argument is provided
if [ $# -eq 0 ]; then
    echo "Error: No folder specified"
    echo "Usage: ./compress_videos.sh <folder_path>"
    exit 1
fi

FOLDER="$1"

# Check if folder exists
if [ ! -d "$FOLDER" ]; then
    echo "Error: Folder '$FOLDER' does not exist"
    exit 1
fi

# Find all MP4 files in the folder
mp4_files=("$FOLDER"/*.mp4)

# Check if any MP4 files exist
if [ ! -e "${mp4_files[0]}" ]; then
    echo "No MP4 files found in '$FOLDER'"
    exit 0
fi

echo "Found ${#mp4_files[@]} MP4 file(s) in '$FOLDER'"
echo "Starting compression..."
echo ""

# Counter for processed files
count=0
success=0
failed=0

# Process each MP4 file
for input_file in "${mp4_files[@]}"; do
    # Skip if already a compressed file
    if [[ "$input_file" == *"-compressed.mp4" ]]; then
        echo "Skipping already compressed file: $(basename "$input_file")"
        continue
    fi
    
    # Get filename without extension
    filename=$(basename "$input_file" .mp4)
    
    # Create output filename
    output_file="$FOLDER/${filename}-compressed.mp4"
    
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
    echo "[$count] Compressing: $(basename "$input_file")"
    
    # Run ffmpeg compression
    if ffmpeg -i "$input_file" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart "$output_file" -y 2>&1 | grep -E "frame=|error|Error"; then
        
        # Check if output file was created successfully
        if [ -f "$output_file" ]; then
            original_size=$(du -h "$input_file" | cut -f1)
            compressed_size=$(du -h "$output_file" | cut -f1)
            echo "✓ Success: $(basename "$output_file")"
            echo "  Original: $original_size → Compressed: $compressed_size"
            ((success++))
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

# Summary
echo "======================================"
echo "Compression Complete!"
echo "Total files processed: $count"
echo "Successful: $success"
echo "Failed: $failed"
echo "======================================"