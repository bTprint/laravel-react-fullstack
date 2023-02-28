export default function UsersForm() {
    return (
        <div className="login-signup-form animated fadeInDown">
            <div>
                <h1 className="title">Adauga utilizator nou</h1>
                <form>
                    <div>
                        <input type="text" placeholder="Nume, Prenume" />
                        <input type="email" placeholder="Adresă Email" />
                        <input type="password" placeholder="Parola" />
                        <input type="passwordConfirmation" placeholder="Confirmă Parola" />

                    </div>
                </form>
            </div>
        </div>
    )
}
