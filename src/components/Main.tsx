import Button from "@mui/material/Button";
import FeedbackCells from "./FeedbackCells.tsx";


export default  function Main(){
    return(
        <>
            <main>
                <h1>Получите профессию frontend-разработчика и постройте карьеру в IT</h1>
                <h3>Устроитесь на работу или вернем
                деньги, после прохождения полной программы.</h3>
                <Button variant='contained'></Button>
                <div>
                    <FeedbackCells feedbackComment = 'crcrc'></FeedbackCells>
                    <FeedbackCells feedbackComment = 'crcrc'></FeedbackCells>
                    <FeedbackCells feedbackComment = 'crcrc'></FeedbackCells>
                </div>
            </main>
        </>
    )
}