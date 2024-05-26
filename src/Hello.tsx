import React, { FC, useEffect } from 'react';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  const [version, setVersion] = React.useState(1);
  useEffect(() => {
    console.log("### Hello useEffect");
  }, [])

  return <div className={'Hello'}>
    <h1>Hello, now: {Date.now()}</h1>
    <button onClick={() => setVersion(n => n + 1)}>Version: {version}</button>
  </div>;
}
