import React from "react";
import { CakeShopServiceConsumer } from "../cakeShopServiceContext";

function withCakeShopService() {
    return function (Wrapped) {
        return function (props) {
            return (
                <CakeShopServiceConsumer>
                    {function (cakeShopService) {
                        return (
                            <Wrapped
                                {...props}
                                cakeShopService={cakeShopService}
                            />
                        );
                    }}
                </CakeShopServiceConsumer>
            );
        };
    };
}

export default withCakeShopService;
