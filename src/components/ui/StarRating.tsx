interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export default function StarRating({
  rating,
  maxRating = 5,
}: StarRatingProps) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: maxRating }, (_, i) => (
        <span
          key={i}
          className={
            i < rating
              ? "text-[var(--color-star)]"
              : "text-[var(--color-star-empty)]"
          }
        >
          ★
        </span>
      ))}
    </div>
  );
}
