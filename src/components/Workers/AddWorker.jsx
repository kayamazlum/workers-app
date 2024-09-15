import { Fragment, /*useEffect,*/ useRef, useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal"
// import Wrapper from "../Helpers/Wrapper"

const AddWorker = (props) => {
    const [error, setError] = useState()

    const nameInputRef = useRef()
    const wageInputRef = useRef()
    const minimumWage = 5000

    // useEffect(()=>{
    //     console.log("Çalıştı")
    // }, [])
    

    const addWorkerHandler = (e) => {
        e.preventDefault()
        const enteredName = nameInputRef.current.value
        const enteredWage = wageInputRef.current.value

        if (nameInputRef.current.value.trim().length === 0) {
            setError({
                title: "İsim Alanı Zorunludur!",
                message: "Lütfen bir isim giriniz."
            })
            return
        }
        if (+wageInputRef.current.value < minimumWage) {
            setError({
                title: "Maaş Alanı Zorunludur.",
                message: `Lütfen ${minimumWage}'den büyük bir maaş değeri giriniz.`
            })
            return
        }

        props.setWorkers((prevState) => [
            {
                id: Math.floor(Math.random() * 1000),
                name: enteredName,
                wage: enteredWage
            },
            ...prevState
        ])
        nameInputRef.current.value = ""
        wageInputRef.current.value = ""
    }

    const errorHandler = () => {
        setError(null)
    }
    return (
        <Fragment>
            {error && <ErrorModal onConfirm={errorHandler} error={error}></ErrorModal>}
            <Card className="mt-8">
                <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler} >
                    <label htmlFor="name" className="font-medium">Çalışan İsmi</label>
                    <input ref={nameInputRef} type="text" className="max-w-[40rem] w-full mx-auto border p-2" placeholder="Çalışan ismi yazınız." id="name" />
                    <label htmlFor="wage" className="font-medium">Maaş Miktarı</label>
                    <input type="number"
                     className="max-w-[40rem] w-full mx-auto border p-2"
                     placeholder="Maaş miktarı giriniz." id="wage" 
                     ref={wageInputRef}
                     />
                    <Button className={" mt-2"} type={"submit"}>Ekle</Button>
                </form>
            </Card>
        </Fragment>
    )
}

export default AddWorker