import { useState } from "react";

const FormularioIngreso = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(user);
    }

    const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, username: e.target.value })
    }

    const handlePasswordInput = (_e: React.ChangeEvent<HTMLInputElement>) => {
    }

    return (
        <div className="flex flex-col items-center justify-center h-[500px] text-white">
            <div className="text-lg md:text-2xl font-bold">
                <h1>Ingresa a tu sesión</h1>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 md:w-1/3 flex flex-col gap-8">
                <fieldset className="flex flex-col items-center gap-4">
                    <label className="" htmlFor="username">Usuario</label>
                    <input className="border border-white rounded-2xl md:w-64 h-8 px-2 text-center" type="text" id="username" placeholder="Ingresa tu usuario" onChange={handleUsernameInput} />
                </fieldset>
                <fieldset className="flex flex-col items-center gap-4">
                    <label htmlFor="password">Contraseña</label>
                    <input className="border border-white rounded-2xl md:w-64 h-8 px-2 text-center" type="password" id="password" placeholder="Ingresa tu contraseña" onChange={handlePasswordInput} />
                </fieldset>
                <button className="mx-auto bg-[#C2EAFC] text-[#13162E] focus:bg-white h-8 font-bold w-3/4 rounded-2xl cursor-pointer lg:w-64">Ingresar</button>
            </form>
        </div>
    )
}

export default FormularioIngreso;