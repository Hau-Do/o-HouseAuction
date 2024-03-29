package com.yourcomp.name;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.Callable;
import org.web3j.abi.EventEncoder;
import org.web3j.abi.EventValues;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Address;
import org.web3j.abi.datatypes.Bool;
import org.web3j.abi.datatypes.Event;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.abi.datatypes.Utf8String;
import org.web3j.abi.datatypes.generated.Uint256;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.RemoteCall;
import org.web3j.protocol.core.methods.request.EthFilter;
import org.web3j.protocol.core.methods.response.Log;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.tuples.generated.Tuple4;
import org.web3j.tx.Contract;
import org.web3j.tx.TransactionManager;
import rx.Observable;
import rx.functions.Func1;

/**
 * <p>Auto generated code.
 * <p><strong>Do not modify!</strong>
 * <p>Please use the <a href="https://docs.web3j.io/command_line.html">web3j command line tools</a>,
 * or the org.web3j.codegen.SolidityFunctionWrapperGenerator in the 
 * <a href="https://github.com/web3j/web3j/tree/master/codegen">codegen module</a> to update.
 *
 * <p>Generated with web3j version 3.2.0.
 */
public class MovieSale extends Contract {
    private static final String BINARY = "606060405260068054600160a060020a03191633600160a060020a0316179055610c4e8061002e6000396000f30060606040526004361061006c5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166304a2aa0281146100715780635c7b14c1146100c25780636e710de414610170578063714b1bec146101d9578063f639d0ec146101fe575b600080fd5b6100c060046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965050843594602001351515935061025892505050565b005b34156100cd57600080fd5b6100d8600435610394565b604051600160a060020a038416602082015260408101839052811515606082015260808082528190810186818151815260200191508051906020019080838360005b8381101561013257808201518382015260200161011a565b50505050905090810190601f16801561015f5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b341561017b57600080fd5b6100c060046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965050843594600160a060020a0360208201351694506040013515159250610541915050565b34156101e457600080fd5b6101ec6109c6565b60405190815260200160405180910390f35b341561020957600080fd5b6100c060046024813581810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496505084359460200135151593506109cd92505050565b600080846040518082805190602001908083835b6020831061028b5780518252601f19909201916020918201910161026c565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902090506000816001018054600181600116156101000203166002900490501115156102e757600080fd5b805433600160a060020a039081169116141561030257600080fd5b6002810154670de0b6b3a764000034041461031c57600080fd5b8054600160a060020a03163480156108fc0290604051600060405180830381858888f19350505050151561034f57600080fd5b805473ffffffffffffffffffffffffffffffffffffffff191633600160a060020a031617815560028101929092556003909101805460ff191691151591909117905550565b61039c610b49565b60008060006103a9610b5b565b600086815260016020526040808220905180828054600181600116156101000203166002900480156104125780601f106103f0576101008083540402835291820191610412565b820191906000526020600020905b8154815290600101906020018083116103fe575b505092835250506020016040518091039020608060405190810160405290816000820160009054906101000a9004600160a060020a0316600160a060020a0316600160a060020a03168152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104f85780601f106104cd576101008083540402835291602001916104f8565b820191906000526020600020905b8154815290600101906020018083116104db57829003601f168201915b5050509183525050600282015460208083019190915260039092015460ff1615156040909101529091508101519450805193508060400151925080606001519150509193509193565b610549610b5b565b60065433600160a060020a0390811691161461056457600080fd5b6063841161057157600080fd5b6000856040518082805190602001908083835b602083106105a35780518252601f199092019160209182019101610584565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020608060405190810160405290816000820160009054906101000a9004600160a060020a0316600160a060020a0316600160a060020a03168152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106aa5780601f1061067f576101008083540402835291602001916106aa565b820191906000526020600020905b81548152906001019060200180831161068d57829003601f168201915b5050509183525050600282015460208083019190915260039092015460ff1615156040909101529091506000908201515111156107e9577f479bb14140062bccc3728c4c790c3532f7a6444b5bc8ccbdd0c6fd2c805ce3016000866040518215158152606060208201818152906040830190830184818151815260200191508051906020019080838360005b8381101561074e578082015183820152602001610736565b50505050905090810190601f16801561077b5780820380516001836020036101000a031916815260200191505b50838103825260268152602001807f4d6f76696520616c7265616479206578697374732e43616e6e6f74205265676981526020017f737465722121000000000000000000000000000000000000000000000000000081525060400194505050505060405180910390a16109bf565b60028054600101905560208101859052600160a060020a03831681526040808201859052821515606083015281906000908790518082805190602001908083835b602083106108495780518252601f19909201916020918201910161082a565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040519081900390208151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03919091161781556020820151816001019080516108c1929160200190610b8a565b50604082015181600201556060820151600391909101805460ff1916911515919091179055506002546000908152600160205260409020858051610909929160200190610b8a565b507f479bb14140062bccc3728c4c790c3532f7a6444b5bc8ccbdd0c6fd2c805ce3016001866040518215158152606060208201818152906040830190830184818151815260200191508051906020019080838360005b8381101561097757808201518382015260200161095f565b50505050905090810190601f1680156109a45780820380516001836020036101000a031916815260200191505b50928303905250600081526040908101925090505180910390a15b5050505050565b6002545b90565b600080846040518082805190602001908083835b60208310610a005780518252601f1990920191602091820191016109e1565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390209050600081600101805460018160011615610100020316600290049050111515610a5c57600080fd5b805433600160a060020a03908116911614610a7657600080fd5b6002810183905560038101805460ff19168315151790557f535f7ce2cdafd547d5887ea6dbf50c000293dcd6a3ec50c5a43e23777d4723dc6001858585604051841515815260408101839052811515606082015260806020820181815290820185818151815260200191508051906020019080838360005b83811015610b06578082015183820152602001610aee565b50505050905090810190601f168015610b335780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a150505050565b60206040519081016040526000815290565b60806040519081016040526000815260208101610b76610b49565b815260006020820181905260409091015290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610bcb57805160ff1916838001178555610bf8565b82800160010185558215610bf8579182015b82811115610bf8578251825591602001919060010190610bdd565b50610c04929150610c08565b5090565b6109ca91905b80821115610c045760008155600101610c0e5600a165627a7a72305820b49d84f6fa672b558dfe2701bf61a127764b029c8895ca8b5808dc538237ae610029";

    protected MovieSale(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    protected MovieSale(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public List<MovieRegEventResponse> getMovieRegEvents(TransactionReceipt transactionReceipt) {
        final Event event = new Event("MovieReg", 
                Arrays.<TypeReference<?>>asList(),
                Arrays.<TypeReference<?>>asList(new TypeReference<Bool>() {}, new TypeReference<Utf8String>() {}, new TypeReference<Utf8String>() {}));
        List<EventValues> valueList = extractEventParameters(event, transactionReceipt);
        ArrayList<MovieRegEventResponse> responses = new ArrayList<MovieRegEventResponse>(valueList.size());
        for (EventValues eventValues : valueList) {
            MovieRegEventResponse typedResponse = new MovieRegEventResponse();
            typedResponse.isSuccess = (Boolean) eventValues.getNonIndexedValues().get(0).getValue();
            typedResponse.movieName = (String) eventValues.getNonIndexedValues().get(1).getValue();
            typedResponse.errorMessage = (String) eventValues.getNonIndexedValues().get(2).getValue();
            responses.add(typedResponse);
        }
        return responses;
    }

    public Observable<MovieRegEventResponse> movieRegEventObservable(DefaultBlockParameter startBlock, DefaultBlockParameter endBlock) {
        final Event event = new Event("MovieReg", 
                Arrays.<TypeReference<?>>asList(),
                Arrays.<TypeReference<?>>asList(new TypeReference<Bool>() {}, new TypeReference<Utf8String>() {}, new TypeReference<Utf8String>() {}));
        EthFilter filter = new EthFilter(startBlock, endBlock, getContractAddress());
        filter.addSingleTopic(EventEncoder.encode(event));
        return web3j.ethLogObservable(filter).map(new Func1<Log, MovieRegEventResponse>() {
            @Override
            public MovieRegEventResponse call(Log log) {
                EventValues eventValues = extractEventParameters(event, log);
                MovieRegEventResponse typedResponse = new MovieRegEventResponse();
                typedResponse.isSuccess = (Boolean) eventValues.getNonIndexedValues().get(0).getValue();
                typedResponse.movieName = (String) eventValues.getNonIndexedValues().get(1).getValue();
                typedResponse.errorMessage = (String) eventValues.getNonIndexedValues().get(2).getValue();
                return typedResponse;
            }
        });
    }

    public List<UpdateMovieEventResponse> getUpdateMovieEvents(TransactionReceipt transactionReceipt) {
        final Event event = new Event("UpdateMovie", 
                Arrays.<TypeReference<?>>asList(),
                Arrays.<TypeReference<?>>asList(new TypeReference<Bool>() {}, new TypeReference<Utf8String>() {}, new TypeReference<Uint256>() {}, new TypeReference<Bool>() {}));
        List<EventValues> valueList = extractEventParameters(event, transactionReceipt);
        ArrayList<UpdateMovieEventResponse> responses = new ArrayList<UpdateMovieEventResponse>(valueList.size());
        for (EventValues eventValues : valueList) {
            UpdateMovieEventResponse typedResponse = new UpdateMovieEventResponse();
            typedResponse.isSuccess = (Boolean) eventValues.getNonIndexedValues().get(0).getValue();
            typedResponse.movieName = (String) eventValues.getNonIndexedValues().get(1).getValue();
            typedResponse.cost = (BigInteger) eventValues.getNonIndexedValues().get(2).getValue();
            typedResponse.status = (Boolean) eventValues.getNonIndexedValues().get(3).getValue();
            responses.add(typedResponse);
        }
        return responses;
    }

    public Observable<UpdateMovieEventResponse> updateMovieEventObservable(DefaultBlockParameter startBlock, DefaultBlockParameter endBlock) {
        final Event event = new Event("UpdateMovie", 
                Arrays.<TypeReference<?>>asList(),
                Arrays.<TypeReference<?>>asList(new TypeReference<Bool>() {}, new TypeReference<Utf8String>() {}, new TypeReference<Uint256>() {}, new TypeReference<Bool>() {}));
        EthFilter filter = new EthFilter(startBlock, endBlock, getContractAddress());
        filter.addSingleTopic(EventEncoder.encode(event));
        return web3j.ethLogObservable(filter).map(new Func1<Log, UpdateMovieEventResponse>() {
            @Override
            public UpdateMovieEventResponse call(Log log) {
                EventValues eventValues = extractEventParameters(event, log);
                UpdateMovieEventResponse typedResponse = new UpdateMovieEventResponse();
                typedResponse.isSuccess = (Boolean) eventValues.getNonIndexedValues().get(0).getValue();
                typedResponse.movieName = (String) eventValues.getNonIndexedValues().get(1).getValue();
                typedResponse.cost = (BigInteger) eventValues.getNonIndexedValues().get(2).getValue();
                typedResponse.status = (Boolean) eventValues.getNonIndexedValues().get(3).getValue();
                return typedResponse;
            }
        });
    }

    public RemoteCall<TransactionReceipt> buyMovie(String _movieName, BigInteger _newcost, Boolean _newStatus, BigInteger weiValue) {
        Function function = new Function(
                "buyMovie", 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Utf8String(_movieName), 
                new org.web3j.abi.datatypes.generated.Uint256(_newcost), 
                new org.web3j.abi.datatypes.Bool(_newStatus)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function, weiValue);
    }

    public RemoteCall<Tuple4<String, String, BigInteger, Boolean>> getMovieDetails(BigInteger index) {
        final Function function = new Function("getMovieDetails", 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(index)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Utf8String>() {}, new TypeReference<Address>() {}, new TypeReference<Uint256>() {}, new TypeReference<Bool>() {}));
        return new RemoteCall<Tuple4<String, String, BigInteger, Boolean>>(
                new Callable<Tuple4<String, String, BigInteger, Boolean>>() {
                    @Override
                    public Tuple4<String, String, BigInteger, Boolean> call() throws Exception {
                        List<Type> results = executeCallMultipleValueReturn(function);;
                        return new Tuple4<String, String, BigInteger, Boolean>(
                                (String) results.get(0).getValue(), 
                                (String) results.get(1).getValue(), 
                                (BigInteger) results.get(2).getValue(), 
                                (Boolean) results.get(3).getValue());
                    }
                });
    }

    public RemoteCall<TransactionReceipt> movieRegistration(String _moviename, BigInteger _cost, String _owner, Boolean status) {
        Function function = new Function(
                "movieRegistration", 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Utf8String(_moviename), 
                new org.web3j.abi.datatypes.generated.Uint256(_cost), 
                new org.web3j.abi.datatypes.Address(_owner), 
                new org.web3j.abi.datatypes.Bool(status)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteCall<BigInteger> getTotalMoviesCounter() {
        Function function = new Function("getTotalMoviesCounter", 
                Arrays.<Type>asList(), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Uint256>() {}));
        return executeRemoteCallSingleValueReturn(function, BigInteger.class);
    }

    public RemoteCall<TransactionReceipt> updateMovieDetails(String _movieName, BigInteger _cost, Boolean _status) {
        Function function = new Function(
                "updateMovieDetails", 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Utf8String(_movieName), 
                new org.web3j.abi.datatypes.generated.Uint256(_cost), 
                new org.web3j.abi.datatypes.Bool(_status)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public static RemoteCall<MovieSale> deploy(Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit, BigInteger initialWeiValue) {
        return deployRemoteCall(MovieSale.class, web3j, credentials, gasPrice, gasLimit, BINARY, "", initialWeiValue);
    }

    public static RemoteCall<MovieSale> deploy(Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit, BigInteger initialWeiValue) {
        return deployRemoteCall(MovieSale.class, web3j, transactionManager, gasPrice, gasLimit, BINARY, "", initialWeiValue);
    }

    public static MovieSale load(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return new MovieSale(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    public static MovieSale load(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new MovieSale(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public static class MovieRegEventResponse {
        public Boolean isSuccess;

        public String movieName;

        public String errorMessage;
    }

    public static class UpdateMovieEventResponse {
        public Boolean isSuccess;

        public String movieName;

        public BigInteger cost;

        public Boolean status;
    }
}
