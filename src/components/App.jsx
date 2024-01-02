
import { useState } from "react"
import { FeedbackOptions } from "components/FeedbackOptions"
import { Statistics } from "components/Statistics"
import { Section } from "components/Section"
import { Notification } from "components/Notification"


export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const updateFeedback = (type) => {
    switch (type) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    console.log(good + neutral + bad)
    return good + neutral + bad;
  }
  const countPositiveFeedbackPercentage = () => {

    const total = neutral + bad + good;
    return Math.round(good / total * 100);
  }

  return (<>
    <Section>
      <FeedbackOptions options={['neutral', 'bad', 'good']}
        updateFeedback={updateFeedback} />
      {countTotalFeedback() ?
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        /> :
        <Notification message="There is no feedback" />}
    </Section>
  </>)


}
