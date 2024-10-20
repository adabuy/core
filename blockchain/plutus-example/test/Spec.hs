{-# LANGUAGE OverloadedStrings #-}
module Main(main) where

import Spec.Slave qualified

import Test.Tasty

main :: IO ()
main = defaultMain tests

tests :: TestTree
tests =
  testGroup "use cases" [ Spec.Slave.tests ]
