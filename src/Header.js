import airPnpLogo from './assets/airbnb-logo.png'


export default function Header(){
    return (
        <div>
            <img className="nav--logo" src={airPnpLogo} alt="airPnpLogo" />
        </div>
    )
}