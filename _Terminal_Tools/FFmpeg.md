---
subtitle: FFmpeg
---

## How to extract a frame/frames from a video source in Terminal

Example:

```sh
ffmpeg -ss 124 -i input.mp4 -frames:v 1 output.bmp
```

- `-i url (input)`  
  input file url

- `-ss position`

  - When used as an input option (before `-i`), seeks in this input file to position.
    Note that in most formats it is not possible to seek exactly, so ffmpeg will seek to the closest seek point before position. When transcoding and -accurate_seek is enabled (the default), this extra segment between the seek point and position will be decoded and discarded. When doing stream copy or when -noaccurate_seek is used, it will be preserved.
  - When used as an output option (before an output url), decodes but discards input until the timestamps reach position.

- `-frames[:stream_specifier] framecount (output,per-stream)`  
  Stop writing to the stream after framecount frames.
