

export const Popup = ({children , activeState, setStateAction})=>{
    return (
        <div className={`modal-wrapper ${activeState && "open"}`}>

        <div className="overlay" onClick={setStateAction}></div>
        <div className="popup">
            {children}
        </div>
    </div>
    )
}