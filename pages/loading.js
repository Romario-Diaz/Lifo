
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <>
            <div className='loading_container'>
                <div className='loading'>
                    <ReactLoading type={`bubbles`} color={`#000`} height={'100px'} width={'100px'} />
                </div>
            </div>

           
        </>
    )
}

export default Loading