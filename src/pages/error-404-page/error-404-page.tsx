import { Helmet } from 'react-helmet-async';

function Error404(): JSX.Element {
   return (
     <div className="404-error">
      <Helmet>
        <title>6 Cities | 404-error</title>
      </Helmet>
       404 Not Found
     </div>
   );
 }

 export default Error404;
