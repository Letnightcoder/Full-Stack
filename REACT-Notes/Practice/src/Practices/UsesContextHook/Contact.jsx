import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    <MyProviders theme={theme} setTheme={setTheme}>
      <div className={theme === 'dark' ? 'bg-gray-900 text-white max-h-700 p-4' : 'bg-white text-black max-h-700 p-4'}>
        <WelcomePanel />
        <label className="mt-4 block">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light')
            }}
            className="mr-2"
          />
          Use dark mode
        </label>
      </div>
    </MyProviders>
  );
}

function MyProviders({ children, theme, setTheme }) {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

function WelcomePanel() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
}

function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);
  return <p className="mt-2">You logged in as {currentUser.name}.</p>;
}

function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const canLogin = firstName !== '' && lastName !== '';

  return (
    <div className="space-y-4 mt-4">
      <label className="block">
        First name:{' '}
        <input
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </label>
      <label className="block">
        Last name:{' '}
        <input
          required
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({ name: firstName + ' ' + lastName });
        }}
      >
        Log in
      </Button>
      {!canLogin && <i className="text-red-500 text-sm">Fill in both fields.</i>}
    </div>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const baseClasses = 'rounded-lg shadow-md p-6 mt-4';
  const themeClasses = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black';
  return (
    <section className={`${baseClasses} ${themeClasses}`}>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);
  const baseClasses = 'px-4 py-2 rounded font-semibold';
  const themeClasses = theme === 'dark'
    ? 'bg-blue-600 hover:bg-blue-700 text-white'
    : 'bg-blue-500 hover:bg-blue-600 text-white';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  return (
    <button
      className={`${baseClasses} ${themeClasses} ${disabledClasses}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
