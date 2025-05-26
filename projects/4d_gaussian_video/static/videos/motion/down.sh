mkdir -p compressed

for f in *.mp4; do
  ffmpeg -i "$f" -vcodec libx264 -crf 36 -preset slow -acodec aac -b:a 128k "compressed/$f"
done
