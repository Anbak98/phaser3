class BasiceWebGame extends Phaser.Scene
    {
        preload ()
        {
            this.load.setBaseURL('https://raw.githubusercontent.com/Anbak98/anbak98.github.io/main/phaser3/');
            this.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
            this.load.tilemapCSV('map', 'assets/tilemaps/csv/catastrophi_level2.csv');
            this.load.spritesheet('player', 'assets/sprites/spaceman.png', { frameWidth: 16, frameHeight: 16 });
        }
    }