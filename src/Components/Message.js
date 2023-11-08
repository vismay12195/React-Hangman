const Message = ({ result, gameWords, resetGame }) => {
    if (!result) {
        return
    }

    return (
        <div className="message">
            <p>You {result}</p>
            <p>The Word is: {gameWords}</p>
            <button onClick={resetGame} id="reset"> Play Again? </button>
        </div>


    )
}

export default Message;