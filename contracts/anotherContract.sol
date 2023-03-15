// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./ITest.sol";

// send ERC20 tokens to this contract
contract anotherContract {
    ITest add;
    IERC20 myToken;

    constructor(ITest _add, IERC20 _MyToken) {
        add = ITest(_add);
        myToken = IERC20(_MyToken);
    }

    function sendTokens(address receiver) external {
        // call the forward function of test contract and.
        // send the balance of this address to receiver address
        myToken.approve(address(add), myToken.balanceOf(msg.sender));
        add.forward(address(this), receiver, myToken.balanceOf(address(this)));
    }
}
