import React, { useState, useRef, useEffect } from "react";
import { Music, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Create a sophisticated romantic piano melody using Web Audio API
  const createRomanticMelody = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // More sophisticated romantic piano melody with harmonies
    const melody = [
      { notes: [261.63], duration: 1000 }, // C4
      { notes: [293.66], duration: 800 },  // D4
      { notes: [329.63, 261.63], duration: 600 },  // E4 + C4 harmony
      { notes: [349.23], duration: 1200 }, // F4
      { notes: [329.63, 261.63], duration: 800 },  // E4 + C4 harmony
      { notes: [293.66], duration: 600 },  // D4
      { notes: [261.63, 195.99], duration: 1400 }, // C4 + G3 harmony
      { notes: [220.00], duration: 800 },  // A3
      { notes: [246.94, 195.99], duration: 1000 }, // B3 + G3 harmony
      { notes: [261.63], duration: 1200 }, // C4
    ];

    let currentTime = audioContext.currentTime;

    const playNotes = (frequencies, duration) => {
      frequencies.forEach(freq => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(freq, currentTime);
        oscillator.type = 'sine'; // Soft sine wave for piano-like sound

        // More sophisticated envelope for natural piano sound
        const baseVolume = frequencies.length > 1 ? 0.06 : 0.1; // Lower volume for harmonies
        gainNode.gain.setValueAtTime(0, currentTime);
        gainNode.gain.linearRampToValueAtTime(baseVolume, currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(baseVolume * 0.7, currentTime + duration / 1000 - 0.2);
        gainNode.gain.exponentialRampToValueAtTime(0.001, currentTime + duration / 1000);

        oscillator.start(currentTime);
        oscillator.stop(currentTime + duration / 1000);
      });

      currentTime += duration / 1000;
    };

    const playMelody = () => {
      melody.forEach(({ notes, duration }) => {
        playNotes(notes, duration);
      });
    };

    return { playMelody, duration: melody.reduce((acc, note) => acc + note.duration, 0) };
  };

  const playMusic = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current) {
        clearInterval(audioRef.current);
      }
      return;
    }

    try {
      const { playMelody, duration } = createRomanticMelody();
      playMelody();
      setIsPlaying(true);

      // Loop the melody with a longer pause for elegance
      const interval = setInterval(() => {
        if (!isMuted) {
          const { playMelody } = createRomanticMelody();
          playMelody();
        }
      }, duration + 3000); // Longer pause between loops for sophistication

      audioRef.current = interval;
    } catch (error) {
      console.log("Audio context not supported");
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (!isMuted && audioRef.current) {
      clearInterval(audioRef.current);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        clearInterval(audioRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50">
      <Card className="music-player-elegant">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Music className="w-5 h-5 text-rose-500" />
            <span className="text-sm font-montserrat elegant-text font-medium">
              Romantic Piano
            </span>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={playMusic}
                className="w-8 h-8 p-0 hover:bg-rose-100 elegant-button-small"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-rose-600" />
                ) : (
                  <Play className="w-4 h-4 text-rose-600" />
                )}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleMute}
                className="w-8 h-8 p-0 hover:bg-rose-100 elegant-button-small"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-rose-600" />
                ) : (
                  <Volume2 className="w-4 h-4 text-rose-600" />
                )}
              </Button>
            </div>
          </div>
          {isPlaying && (
            <div className="mt-2 h-1 bg-rose-100 rounded overflow-hidden">
              <div className="h-full bg-gradient-to-r from-rose-400 to-pink-500 animate-shimmer"></div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BackgroundMusic;