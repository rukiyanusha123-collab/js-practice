function withBorder (WrappedComponent){
    return function EnhancedComponents(props){
        return (
            <div style={{border:"2px solid black",color:"#A66A5B",fontFamily:"cursive"}}>
                <WrappedComponent/>
            </div>
         
            
        )
    }
}
export default withBorder;