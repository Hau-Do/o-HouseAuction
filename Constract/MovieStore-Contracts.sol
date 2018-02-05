pragma solidity ^0.4.13;

// Buy and Sell is done through Smart contracts

contract MovieSale {

    // Used to store user addresses ---> number of movie token hold by the address    
    mapping (string=>details) map_movieName;
    mapping (uint=>string) map_index_movie;
    
    struct details {
        address owner;
        string movie_name;
        uint cost;
        bool isAvailableForSale;     
    } 
    
    uint counter;

    string movieName;
    string tokenSymbol;
    string tokenName;
    
    address contract_owner;

    function MovieSale() public payable {
        
        contract_owner = msg.sender;
    }

    modifier onlyAdmin() {
        if (contract_owner!=msg.sender)
         revert();
        _;
    }
    
    event MovieReg(bool isSuccess,string movieName,string errorMessage);

    function movieRegistration(string _moviename,uint _cost,address _owner, bool status) public onlyAdmin
                                                                 {
        // Minimum registration fee - 100 Ethers        
        // Check if the movie is already registered based on movie name
        require(_cost>99);
        details memory movieDetail = map_movieName[_moviename];
        
        if(bytes(movieDetail.movie_name).length > 0) {
            MovieReg(false, _moviename,"Movie already exists.Cannot Register!!");
            return;
        }

        counter++;
        movieDetail.movie_name = _moviename;
        movieDetail.owner = _owner;
        movieDetail.cost =_cost;
        movieDetail.isAvailableForSale = status;
        
        map_movieName[_moviename] = movieDetail;
        map_index_movie[counter] = _moviename;
        
        MovieReg(true,_moviename,"");
    }
    

    function getTotalMoviesCounter() constant public returns (uint){
        return counter;
    }


    function getMovieDetails(uint index) public constant returns (string _movieName,address _owner, uint _cost, bool _status ) {

        details memory movieInfo = map_movieName[map_index_movie[index]];
        _movieName = movieInfo.movie_name;
        _owner = movieInfo.owner;
        _cost = movieInfo.cost;
        _status = movieInfo.isAvailableForSale;

    }


    event UpdateMovie(bool isSuccess,string movieName,uint cost,bool status);

    function updateMovieDetails(string _movieName, uint _cost, bool _status ) public {

        details storage movieInfo = map_movieName[_movieName];
        
        if(bytes(movieInfo.movie_name).length <= 0) 
            revert(); //movie doesnt exists

        // Make sure only owner of the movie updates the parameters
        if (movieInfo.owner!= msg.sender)
            revert();

        movieInfo.cost = _cost;
        movieInfo.isAvailableForSale = _status;

        UpdateMovie(true,_movieName,_cost,_status);

    }

    function buyMovie(string _movieName,uint _newcost,bool _newStatus) public payable{

        details storage movieInfo = map_movieName[_movieName];
        
        if(bytes(movieInfo.movie_name).length <= 0) 
            revert(); //movie doesnt exists

        // Owner and Buyer cannot be same
        if (movieInfo.owner== msg.sender)
            revert();
        
        // Matching the cost in ethers
        if (movieInfo.cost != msg.value/1000000000000000000)
            revert();

        movieInfo.owner.transfer(msg.value);
        movieInfo.owner = msg.sender;
        movieInfo.cost = _newcost;
        movieInfo.isAvailableForSale = _newStatus;

    }

}