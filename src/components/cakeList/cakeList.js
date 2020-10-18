import React, { Component } from "react";
import { connect } from "react-redux";
import withCakeShopService from "../hoc";
import { fetchCakes } from "../../actions";
import CakeListItem from "../cakeListItem/cakeListItem";
import Spinner from "../spinner";
import ErrorIndicator from "../errorIndicator";
import "./cakeList.css";

class CakeList extends Component {
    componentDidMount() {
        this.props.fetchCakes();
    }

    render() {
        if (this.props.loading) {
            return <Spinner />;
        }
        if (this.props.error) {
            return <ErrorIndicator />;
        }
        return (
            <ul className="sweet_list">
                {this.props.cakes.map((cake) => {
                    return <CakeListItem key={cake.id} cake={cake} />;
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cakes: state.cakes,
        loading: state.loading,
        error: state.error,
    };
};

const mapDispatchToProps = (dispatch, { cakeShopService }) => {
    return { fetchCakes: fetchCakes(dispatch, cakeShopService) };
};

export default withCakeShopService()(
    connect(mapStateToProps, mapDispatchToProps)(CakeList)
);
