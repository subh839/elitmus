

import 'bootstrap-icons/font/bootstrap-icons.css';

export const CongratsScreen = ({
    className,
    style,
    title,
    score,
    records,
    onDismiss:dismiss
    }) => {

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(window.location.href);        
    }

    const tweetText = encodeURI("I scored "+score+"% on a Geography Treasure Hunt in search of "+title+". Try it yourself!");

    className = className+" d-flex justify-content-center align-items-center"
    return(
        <div id="congrats" className={className} style={style}>
            <div id="inner" 
                className="d-flex flex-column border bg-white ms-2 me-2 p-2"
                style={{width: "95%", maxWidth: "600px", maxHeight: "95%"}}>

                <div className="d-flex justify-content-end">
                    <button className="btn btn-close" 
                            onClick={()=>{dismiss()}}></button>
                </div>
                                
                <div className="flex-grow-1 d-flex flex-column overflow-hidden p-2 m-0 m-sm-2 me-sm-1"
                    style={{height: "100%"}}>
                    <h1 className="display-5 fw-bold text-center">You made it!</h1>
                    <p className="h5 text-center" style={{fontWeight: 400}}>You navigated the <strong>{title}</strong> Treasure Hunt!</p>
                    <h2 className="align-self-center display-1 fw-bold">{score}%</h2>
                    <ul className="list-group list-group-flush overflow-auto">
                        {
                        records.map(
                            (record)=>
                            <li key={record.objectid} className="list-group-item d-flex align-items-center">
                                <span className="flex-grow-1">{record.location_name}</span>
                                <span>
                                    <i className={
                                            record.solved && !record.skipped ? 
                                            "bi-check text-success" : 
                                            "bi-x text-danger"
                                        } 
                                        style={{fontSize: "1.5rem"}}></i>
                                </span>
                                <span></span>
                            </li>
                        )
                        }
                    </ul>                    
                   
                    
                </div>
            </div>

        </div> 
    );
}