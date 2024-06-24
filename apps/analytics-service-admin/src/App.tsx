import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AnalyticsEventList } from "./analyticsEvent/AnalyticsEventList";
import { AnalyticsEventCreate } from "./analyticsEvent/AnalyticsEventCreate";
import { AnalyticsEventEdit } from "./analyticsEvent/AnalyticsEventEdit";
import { AnalyticsEventShow } from "./analyticsEvent/AnalyticsEventShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AnalyticsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AnalyticsEvent"
          list={AnalyticsEventList}
          edit={AnalyticsEventEdit}
          create={AnalyticsEventCreate}
          show={AnalyticsEventShow}
        />
      </Admin>
    </div>
  );
};

export default App;
