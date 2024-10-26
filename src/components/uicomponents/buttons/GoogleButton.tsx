import GoogleIcon from '../icons/GoogleIcon'

const GoogleButton = () => {
  return (
    <button className='flex gap-2 rounded-lg border border-picton-blue-200 px-4 py-2 text-picton-blue-700 transition duration-150 hover:border-slate-400 hover:text-slate-900 hover:shadow active:scale-95 active:transform active:border-picton-blue-900'>
      <GoogleIcon className='size-6' />
      <span>Entrar con Google</span>
    </button>
  )
}

export default GoogleButton
