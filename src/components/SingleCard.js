import './SingleCard.css'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
    const handleClick = () => {
        if(!disabled){
            handleChoice(card)
        }
    }
    return (
        <div className='card'>
            <div className={flipped ? 'flipped' : ''}>
                <img src={card.src} alt="card front" className='front' />
                <img
                    src={process.env.PUBLIC_URL+"/img/cover.png"}
                    alt="card cover" className='back'
                    onClick={handleClick} />
            </div>
        </div>);
}

export default SingleCard;