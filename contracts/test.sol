// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./ITest.sol";

contract test is ITest {
    IERC20 token;

    constructor(IERC20 _token) {
        token = IERC20(_token);
    }

    function forward(
        address sender,
        address receiver,
        uint256 amount
    ) external {
        token.transferFrom(sender, receiver, amount);
    }
}
