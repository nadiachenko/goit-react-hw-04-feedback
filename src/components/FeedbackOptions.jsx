import React from 'react';


export const FeedbackOptions = ({ options, updateFeedback }) => {
    return (<div>
        {options.map(option => (
            <button key={option} name={option} className="load-more" onClick={() => updateFeedback(option)}>
                {option}
            </button>
        ))}
    </div>)
}