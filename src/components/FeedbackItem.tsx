import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItem = {
  upvoteCount: number;
  badgeLetter: string;
  companyName: string;
  text: string;
  daysAgo: number;
};

type FeedbackItemProps = {
  feedbackItem: FeedbackItem;
};

export default function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  return (
    <li className='feedback'>
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.companyName}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          delectus totam quidem perferendis sed ad!
        </p>
      </div>
      <p>{feedbackItem.daysAgo}d</p>
    </li>
  );
}
