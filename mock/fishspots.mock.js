export default [
    {
        url: '/api/fishspots',
        method: 'get',
        response: () => {
            return {
                code: 200,
                data: [
        {
            id: 1,
            name: 'Lac de la Forêt',
            type: "Lac",
            fish: ['Carpe', 'Brochet'],
            rating: 4.5,
            image: 'https://picsum.photos/seed/lake1/400/300'
        },
        {
            id: 2,
            name: 'Rivière des Moulin',
            type: 'Rivière',
            fish: ['Truite', 'Perche'],
            rating: 4.2,
            image: 'https://picsum.photos/seed/river1/400/300'
        },
        {
            id: 3,
            name: 'Etang des Saules',
            type: 'Etang',
            fish: ['Carpe', 'Sandre'],
            rating: 3.8,
            image: 'https://picsum.photos/seed/pond2/400/300'
        },
        {
            id: 4,
            name: 'Canal Saint-Martin',
            type: 'Canal',
            fish: ['Silure', 'Perche'],
            rating: 3.5,
            image: 'https://picsum.photos/seed/canal1/400/300'
        }
                ]
    }
        }
    }
];