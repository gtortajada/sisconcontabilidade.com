"use client";

import {
  ActionIcon,
  Box,
  Group,
  Progress,
  Text,
  useMantineTheme,
} from "@mantine/core";
import {
  IconPlayerPause,
  IconPlayerPlay,
  IconRewindBackward15,
  IconVolume,
  IconVolumeOff,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

import "react";

declare module "react" {
  interface VideoHTMLAttributes<T> extends HTMLAttributes<T> {
    loading?: "eager" | "lazy";
  }
}

interface TestimonialsPlayerProps {
  src: string;
}

export function TestimonialsPlayer({ src }: TestimonialsPlayerProps) {
  const theme = useMantineTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const rewind15Seconds = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = Math.max(0, video.currentTime - 15);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    const setVideoData = () => {
      if (video) {
        setDuration(video.duration);
        setIsMuted(video.muted);
      }
    };
    video?.addEventListener("loadedmetadata", setVideoData);
    return () => {
      video?.removeEventListener("loadedmetadata", setVideoData);
    };
  }, []);

  return (
    <Box pos="relative">
      <video
        ref={videoRef}
        src={src}
        style={{ width: "100%", display: "block" }}
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={() => {
          if (videoRef.current) {
            setProgress(videoRef.current.currentTime);
          }
        }}
        onEnded={() => setIsPlaying(false)}
        loading="lazy"
        preload="metadata"
      />

      <Box
        pos="absolute"
        bottom={10}
        left={10}
        right={10}
        p="xs"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: theme.radius.sm,
        }}
      >
        <Progress
          value={(progress / duration) * 100 || 0}
          color="white"
          size="sm"
          styles={{
            root: { backgroundColor: "rgba(255, 255, 255, 0.3)" },
            section: { backgroundColor: "white" },
          }}
        />

        <Group justify="space-between" align="center" mt={5}>
          <Group gap="xs" align="center">
            <ActionIcon onClick={togglePlay} variant="transparent" c="white">
              {isPlaying ? (
                <IconPlayerPause size={24} />
              ) : (
                <IconPlayerPlay size={24} />
              )}
            </ActionIcon>
            <ActionIcon
              onClick={rewind15Seconds}
              variant="transparent"
              c="white"
            >
              <IconRewindBackward15 size={24} />
            </ActionIcon>
          </Group>

          <Group gap="xs" align="center">
            <Text size="sm" c="white">
              {formatTime(progress)} / {formatTime(duration)}
            </Text>

            <ActionIcon onClick={toggleMute} variant="transparent" c="white">
              {isMuted ? <IconVolumeOff size={24} /> : <IconVolume size={24} />}
            </ActionIcon>
          </Group>
        </Group>
      </Box>
    </Box>
  );
}
