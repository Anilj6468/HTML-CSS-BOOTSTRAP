export default function Counter() {
    const descCount = () => {
        setCount(Count - 1);
    };

    const incrCount = () => {
        setCount2(Count2 + 1);
    };

    return (
        <>
            <br />
            <div>
                <button onClick={descCount}>Desc(-)</button>
                <span>{Count}</span>
                <button onClick={incrCount}>Incr()+</button>
            </div>
        </>
    )
};