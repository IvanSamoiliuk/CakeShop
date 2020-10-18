import React, { Component } from "react";
import { connect } from "react-redux";
import withCakeShopService from "../hoc";
import { cakesLoaded, cakesRequested, cakesError } from "../../actions";
import CakeListItem from "../cakeListItem/cakeListItem";
import Spinner from "../spinner";
import ErrorIndicator from "../errorIndicator";
import "./cakeList.css";

class CakeList extends Component {
    componentDidMount() {
        const {
            cakeShopService,
            cakesRequested,
            cakesLoaded,
            cakesError,
        } = this.props;
        cakesRequested();
        cakeShopService
            .getCakes()
            .then((res) => cakesLoaded(res))
            .catch((error) => {
                cakesError(error);
            });
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

const mapDispatchToProps = {
    cakesLoaded,
    cakesRequested,
    cakesError,
};

export default withCakeShopService()(
    connect(mapStateToProps, mapDispatchToProps)(CakeList)
);
