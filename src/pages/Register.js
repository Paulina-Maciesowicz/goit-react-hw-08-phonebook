import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForms';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
