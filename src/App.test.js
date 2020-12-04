import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

          {/* <Login
            setUserEmail={setUserEmail}
            userEmail={userEmail}

            setToken={setToken}
            bearer={bearer}

            setUserPassword={setUserPassword}
            userPassword={userPassword}

            setUserInfo={setUserInfo}
            userInfo={userInfo}

            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          /> */}
         

   
          {/* <button color = "danger"><Register />Register</button> */}
          {/* <Register
        setUserEmail={setUserEmail}
        userEmail={userEmail}

        setUserName={setUserName}
        userName={userName}

        setUserPassword={setUserPassword}
        userPassword={userPassword}

         setToken={setToken}
         bearer={bearer}
      /> */}