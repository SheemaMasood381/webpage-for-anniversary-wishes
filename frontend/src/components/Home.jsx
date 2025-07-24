import React, { useState, useEffect } from "react";
import { Heart, Music, Calendar, Camera, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import BackgroundMusic from "./BackgroundMusic";
import FloatingHearts from "./FloatingHearts";

const Home = () => {
  const [daysTogether, setDaysTogether] = useState(0);
  const [yearsTogether, setYearsTogether] = useState(0);

  useEffect(() => {
    const anniversaryDate = new Date("2016-07-26");
    const today = new Date();

    const timeDifference = today.getTime() - anniversaryDate.getTime();
    const days = Math.floor(timeDifference / (1000 * 3600 * 24));
    setDaysTogether(days);

    const years = today.getFullYear() - anniversaryDate.getFullYear();
    const anniversaryThisYear = new Date(today.getFullYear(), 6, 26); // July is 6 (0-based)
    const adjustedYears = today >= anniversaryThisYear ? years : years - 1;
    setYearsTogether(adjustedYears);
  }, []);

  // Helper function for suffix (st, nd, rd, th)
  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  const loveLetterContent = `My dearest Masood,<br><br>

Today marks ${yearsTogether}${getOrdinal(
    yearsTogether
  )} year — ${daysTogether} days — of a love story I'll cherish for a lifetime. Every one of those days with you has meant something precious to me. Some were filled with laughter, some with challenges, and many with quiet, beautiful moments that only we truly understand.

<br><br>

We've walked through storms and danced under sunshine. And through it all — your love has been my anchor. You've been my calm, my spark, my reason to believe in "forever."

<br><br>

Thank you for every thoughtful gesture, every late-night talk, every time you chose us — even when it wasn't easy.

<br><br>

Our journey hasn't been perfect, but it's been ours — raw, real, and deeply rocking. And I wouldn't trade a moment of it.

<br><br>

Here's to every memory we've made — and to many more sunrises we'll share. Happy ${yearsTogether}${getOrdinal(
    yearsTogether
  )} Anniversary, my love.

<br><br>

Forever yours,

<br><br>

Sheema ❤️`;

  return (
    <div className="min-h-screen elegant-background relative overflow-hidden">
      <FloatingHearts />
      <BackgroundMusic />

      {/* Hero Section */}
      <section className="hero-romantic relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative inline-block mb-6">
              <Heart className="w-16 h-16 text-rose-400 mx-auto animate-pulse" />
              <Sparkles className="w-6 h-6 text-rose-300 absolute -top-2 -right-2 animate-pulse" />
            </div>
            <h1 className="text-6xl md:text-7xl font-great-vibes elegant-heading mb-6 animate-fade-in-up">
              Happy {yearsTogether}
              {getOrdinal(yearsTogether)} Anniversary, Masood
            </h1>
            <div className="flex items-center justify-center gap-2 text-rose-500 text-2xl">
              <Heart className="w-6 h-6 fill-current animate-pulse" />
              <Heart
                className="w-6 h-6 fill-current animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <Heart
                className="w-6 h-6 fill-current animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Day Counter */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="classy-card hover-lift">
            <CardContent className="p-8 text-center">
              <Calendar className="w-12 h-12 text-rose-500 mx-auto mb-4" />
              <h2 className="text-3xl font-playfair elegant-heading mb-4">
                Days Together
              </h2>
              <div className="text-6xl font-bold elegant-heading mb-2 animate-count-up">
                {daysTogether.toLocaleString()}
              </div>
              <p className="elegant-text text-lg font-montserrat">
                Beautiful days since July 26, 2016
              </p>
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent rounded animate-shimmer"></div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Love Letter Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="classy-card hover-lift">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-great-vibes elegant-heading mb-4">
                  A Letter From My Heart
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-4"></div>
                <Sparkles className="w-8 h-8 text-rose-300 mx-auto animate-pulse" />
              </div>
              <div
                className="elegant-text leading-relaxed text-lg font-montserrat"
                dangerouslySetInnerHTML={{ __html: loveLetterContent }}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-great-vibes elegant-heading mb-4">
              Our Journey
            </h2>
            <p className="elegant-text text-xl font-montserrat mb-6">
              Beautiful moments we've shared together
            </p>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
          </div>

          <div className="timeline-elegant">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  year: "2016",
                  title: "Our Wedding Day",
                  desc: "Where it all began",
                  color: "from-rose-400 to-pink-500",
                  image: "wedding-2016.jpg",
                },
                {
                  year: "2018",
                  title: "First Home",
                  desc: "Building our nest together",
                  color: "from-pink-400 to-rose-500",
                  image: "first-home-2018.jpg",
                },
                {
                  year: "2020",
                  title: "Adventures",
                  desc: "Creating memories",
                  color: "from-rose-500 to-pink-400",
                  image: "adventures-2020.jpg",
                },
                {
                  year: "2022",
                  title: "Growing Together",
                  desc: "Stronger every day",
                  color: "from-pink-500 to-rose-400",
                  image: "growing-2022.jpg",
                },
                {
                  year: "2024",
                  title: "New Chapters",
                  desc: "Writing our story",
                  color: "from-rose-400 to-pink-500",
                  image: "new-chapters-2024.jpg",
                },
                {
                  year: "2025",
                  title: "9 Years Strong",
                  desc: "Still falling in love",
                  color: "from-pink-400 to-rose-500",
                  image: "nine-years-2025.jpg",
                },
              ].map((memory, index) => (
                <Card
                  key={index}
                  className="classy-card hover-lift group relative z-10"
                >
                  <CardContent className="p-6">
                    <div
                      className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${memory.color} rounded-full mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Camera className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold elegant-heading mb-2">
                        {memory.year}
                      </div>
                      <h3 className="text-xl font-playfair text-gray-800 mb-2">
                        {memory.title}
                      </h3>
                      <p className="elegant-text font-montserrat">
                        {memory.desc}
                      </p>
                    </div>
                    <div className="mt-4 w-full h-32 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg overflow-hidden border-2 border-dashed border-rose-200 group-hover:border-rose-300 transition-colors">
                      {memory.image ? (
                        <img
                          src={`/images/${memory.image}`}
                          alt={`${memory.title} - ${memory.year}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                      ) : null}
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ display: memory.image ? "none" : "flex" }}
                      >
                        <div className="text-center">
                          <Camera className="w-8 h-8 text-rose-400 mx-auto mb-2" />
                          <span className="text-rose-400 font-montserrat text-sm">
                            Photo Placeholder
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="elegant-footer py-12 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-rose-400 fill-current animate-pulse" />
            <span className="elegant-text font-montserrat text-lg font-medium">
              Made with love by Sheema Masood
            </span>
            <Heart className="w-5 h-5 text-rose-400 fill-current animate-pulse" />
          </div>
          <p className="elegant-text font-montserrat">
            Celebrating {yearsTogether}
            {getOrdinal(yearsTogether)} beautiful years together
          </p>
          <div className="mt-4 flex items-center justify-center gap-1">
            <Sparkles className="w-4 h-4 text-rose-300 animate-pulse" />
            <Sparkles
              className="w-4 h-4 text-rose-300 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <Sparkles
              className="w-4 h-4 text-rose-300 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
