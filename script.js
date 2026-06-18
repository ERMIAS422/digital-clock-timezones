// Time zone configurations
const timeZones = [
    { id: 'ny-time', city: 'New York', tz: 'America/New_York', dateId: 'ny-date' },
    { id: 'london-time', city: 'London', tz: 'Europe/London', dateId: 'london-date' },
    { id: 'tokyo-time', city: 'Tokyo', tz: 'Asia/Tokyo', dateId: 'tokyo-date' },
    { id: 'dubai-time', city: 'Dubai', tz: 'Asia/Dubai', dateId: 'dubai-date' },
    { id: 'sydney-time', city: 'Sydney', tz: 'Australia/Sydney', dateId: 'sydney-date' },
    { id: 'singapore-time', city: 'Singapore', tz: 'Asia/Singapore', dateId: 'singapore-date' },
    { id: 'saopaulo-time', city: 'São Paulo', tz: 'America/Sao_Paulo', dateId: 'saopaulo-date' },
    { id: 'la-time', city: 'Los Angeles', tz: 'America/Los_Angeles', dateId: 'la-date' },
    { id: 'moscow-time', city: 'Moscow', tz: 'Europe/Moscow', dateId: 'moscow-date' },
    { id: 'hk-time', city: 'Hong Kong', tz: 'Asia/Hong_Kong', dateId: 'hk-date' },
    { id: 'berlin-time', city: 'Berlin', tz: 'Europe/Berlin', dateId: 'berlin-date' },
    { id: 'toronto-time', city: 'Toronto', tz: 'America/Toronto', dateId: 'toronto-date' }
];

/**
 * Update all clocks
 */
function updateClocks() {
    const now = new Date();

    timeZones.forEach(zone => {
        try {
            // Get time in specific timezone
            const timeString = now.toLocaleString('en-US', {
                timeZone: zone.tz,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            const dateString = now.toLocaleDateString('en-US', {
                timeZone: zone.tz,
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            // Update DOM
            const timeElement = document.getElementById(zone.id);
            const dateElement = document.getElementById(zone.dateId);

            if (timeElement) timeElement.textContent = timeString;
            if (dateElement) dateElement.textContent = dateString;

        } catch (error) {
            console.error(`Error updating ${zone.city}:`, error);
        }
    });
}

/**
 * Initialize and start clock updates
 */
function initClock() {
    // Update immediately
    updateClocks();

    // Update every second
    setInterval(updateClocks, 1000);

    console.log('🕐 Digital Clock started! Updating every second.');
}

// Start clock when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initClock);
} else {
    initClock();
}