import React, { Component } from "react";
import { connect } from "react-redux";
import withCakeShopService from "../hoc";
import { fetchCakes, onIncrease } from "../../actions";
import CakeListItem from "../cakeListItem/cakeListItem";
import Spinner from "../spinner";
import ErrorIndicator from "../errorIndicator";
import "./cakeList.css";

const CakeList = ({ cakes, onIncrease }) => {
    return (
        <ul className="sweet_list">
            {cakes.map((cake) => {
                return (
                    <CakeListItem
                        key={cake.id}
                        cake={cake}
                        onIncrease={() => onIncrease(cake.id)}
                    />
                );
            })}
        </ul>
    );
};
class CakeListContainer extends Component {
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
            <CakeList
                cakes={this.props.cakes}
                onIncrease={this.props.onIncrease}
            />
        );
    }
}

const mapStateToProps = ({cakes, loading, error}) => {
    return {
        cakes: cakes,
        loading: loading,
        error: error,
    };
};

const mapDispatchToProps = (dispatch, { cakeShopService }) => {
    return {
        fetchCakes: fetchCakes(dispatch, cakeShopService),
        onIncrease: (id) => dispatch(onIncrease(id)),
    };
};

export default withCakeShopService()(
    connect(mapStateToProps, mapDispatchToProps)(CakeListContainer)
);
