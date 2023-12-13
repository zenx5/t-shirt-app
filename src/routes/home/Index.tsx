export default function Index() {

    const handlerClick = (event:any) => {
        alert("hola mundo")
    }

    return <div className="w-screen h-screen flex justify-center items-center flex-col">
        <p>Este es el Home</p>
        <button className="rounded border border-slate-500 py-1 px-5" onClick={handlerClick}>Esto muestra un Alert</button>
    </div>
}