import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <ol className='feedback-list'>
      <li className='feedback'>
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>S</p>
        </div>
        <div>
          <p>Shab</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            delectus totam quidem perferendis sed ad!
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
