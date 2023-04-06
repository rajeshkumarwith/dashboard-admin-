import { useState, useEffect } from 'react';
import axios from 'axios';

function MyDataList({ pageUrl }) {
    const [data, setData] = useState([]);
    const [sortBy, setSortBy] = useState('clicks');

    useEffect(() => {
        axios.get(`/api/my-data/${pageUrl}/`)
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, [pageUrl]);

    const handleSortClicks = () => {
        setSortBy('clicks');
    };

    const handleSortImpressions = () => {
        setSortBy('impressions');
    };

    const sortedData = data.slice().sort((a, b) => b[sortBy] - a[sortBy]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Query</th>
                    <th onClick={handleSortClicks}>Clicks</th>
                    <th onClick={handleSortImpressions}>Impressions</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map(row => (
                    <tr key={row.query}>
                        <td>{row.query}</td>
                        <td>{row.clicks}</td>
                        <td>{row.impressions}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MyDataList;
