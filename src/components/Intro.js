
export const Intro = ({
    className,
    style,
    title,
    description,
    hero,
    onDismiss:dismiss
    }) => {
    className = className+" d-flex justify-content-center align-items-center"
    return(
        <div id="intro" className={className} style={style}>
            <div id="inner" 
                className="d-flex flex-column-reverse flex-md-row h-100 w-100 justify-content-center align-items-center p-3 p-md-4">
                <div className="flex-grow-1 flex-shrink-0 d-flex flex-column overflow-hidden m-2 m-md-3"
                    style={{
                        maxWidth: "600px",
                        flexBasis: "50%",
                        backgroundColor: "rgba(255,255,255,0.8)",
                        }}>
                        <div className="overflow-auto">
                            <h1 className="display-3 fw-bold mb-3">{title}</h1>
                            <h2 className="" style={{fontFamily: "Literata",fontWeight: 300}}>{description}</h2>
                        </div>
                        <button type="button" 
                                className="btn btn-primary align-self-start mt-3 mt-md-5" 
                            onClick={()=>dismiss()}>Get started! </button>
                </div>
                <div className="flex-grow-1 h-100 w-100 m-2 m-md-3" 
                    style={{
                        flexBasis: "50%",
                        maxWidth: "600px",
                        backgroundImage: `url(${hero})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        maxHeight: "500px"
                    }}>            
                </div>
            </div>
        </div> 
    );
}