
interface FeedbackCellsProps {
    feedbackComment: string; // Задаем тип для `feedbackComment`
}

export default function FeedbackCells(props : FeedbackCellsProps) {
    return (
        <>
        <div className="App">
            <img src='' alt = ''/>
            <h2>{props.feedbackComment}</h2>
        </div>
        </>
    )
}