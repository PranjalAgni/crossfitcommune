"use client";

import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/reviews";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ReviewsSection() {
  // Calculate average rating and total reviews
  const totalReviews = REVIEWS.length;
  const averageRating = (
    REVIEWS.reduce((sum, review) => sum + review.rating, 0) / totalReviews
  ).toFixed(2);

  return (
    <section className="relative overflow-hidden bg-white text-neutral-900 transform-gpu skew-y-2">
      <div className="-skew-y-2">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold uppercase leading-tight sm:text-5xl mb-6">
              TRUSTED AND LOVED BY HUNDREDS OF
              <br />
              HYDERABAD RESIDENTS
            </h2>

            {/* Rating Summary */}
            <div className="flex flex-col items-center justify-center gap-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-5xl font-bold">{averageRating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-neutral-600">
                {totalReviews} reviews
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-neutral-700">
              <span className="font-semibold">What our clients say about us</span>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="relative mx-auto max-w-6xl">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {REVIEWS.map((review) => (
                  <CarouselItem
                    key={review.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full">
                      <div className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                        {/* Rating Stars */}
                        <div className="mb-3 flex items-center gap-1">
                          <span className="text-2xl font-bold mr-2">
                            {review.rating}
                          </span>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "fill-neutral-200 text-neutral-200"
                              }`}
                            />
                          ))}
                        </div>

                        {/* Review Date */}
                        <p className="mb-4 text-sm text-neutral-500">
                          {review.date}
                        </p>

                        {/* Review Text */}
                        <p className="mb-6 flex-1 text-neutral-700 leading-relaxed">
                          {review.text}
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-300 text-sm font-bold text-white">
                              {review.initials}
                            </div>
                            <p className="font-semibold text-neutral-900">
                              {review.author}
                            </p>
                          </div>
                          {/* Google Icon */}
                          <svg
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              fill="#4285F4"
                            />
                            <path
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              fill="#34A853"
                            />
                            <path
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              fill="#FBBC05"
                            />
                            <path
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              fill="#EA4335"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 sm:-left-12" />
              <CarouselNext className="-right-4 sm:-right-12" />
            </Carousel>
          </div>

          {/* Pagination Dots or Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-500">
              Powered by <span className="font-semibold">Google Reviews</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

