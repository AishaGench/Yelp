const apiKey='RMiIgbzD-mj0-UKHpVoxObifyKdK9zUb1Z01QShUjOaSmLuMp_qw1tIDKQaSyYU4eObpfpHEotz8_cpxAzoyrUz_uznjDkqKV0-ftUSUzPwqRKcSWk61WD0j_A-KYHYx'

const Yelp = {


    search (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}` 
            }
        }).then((response) => {return response.json()})
        .then((jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business) => {return  {

                     id: business.id,
                     imageSrc:  business.imageSrc,
                     name:  business.name,
                     address:  business.address,
                     city:  business.city,
                     state:  business.state,
                     zipCode:  business.zipCode,
                     category:  business.category,
                     rating:  business.rating,
                     reviewCount:  business.reviewCount
                    

            }})
            }
        })

    }

}

export default Yelp;
