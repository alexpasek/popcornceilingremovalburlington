export default async function GoogleReviewsMulti({
  places = [
    {
      label: "Burlington",
      placeId:
        process.env.NEXT_PUBLIC_BURLINGTON_PLACE_ID ||
        "ChIJgbcp2yJhK4gRpTzm90fDtH8",
    },
  ],
  reviewsPerPlace = 6,
}) {
  // ...existing code...
}