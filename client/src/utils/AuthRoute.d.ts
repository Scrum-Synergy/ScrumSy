// AuthRoute.d.ts
import { ComponentType } from 'react';
import { RouteProps } from 'react-router-dom';

interface AuthRouteProps extends RouteProps {
  isAuthenticated: boolean;
  component: ComponentType<>; // Update this type if possible
}

declare const AuthRoute: (props: AuthRouteProps) => JSX.Element;

export default AuthRoute;
