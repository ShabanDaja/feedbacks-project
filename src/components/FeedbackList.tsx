import FeedbackItem from "./FeedbackItem";

const FeedbackItems = [
  {
    upvoteCount: 593,
    badgeLetter: "S",
    companyName: "Shab",
    text: "test test",
    daysAgo: 4,
  },
  {
    upvoteCount: 300,
    badgeLetter: "A",
    companyName: "Amazon",
    text: "Good service",
    daysAgo: 10,
  },
];

export default function FeedbackList() {
  return (
    <ol className='feedback-list'>
      {FeedbackItems.map(feedbackItem => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
