import React, { Component } from 'react'
import { connect } from 'react-redux'
import shaka from 'shaka-player'
import { setPlayer } from '../actions/player.actions'

class Player extends Component {

	componentDidMount() {
		// Install built-in polyfills to patch browser incompatibilities.
		shaka.polyfill.installAll();

		// Check to see if the browser supports the basic APIs Shaka needs.
		if (shaka.Player.isBrowserSupported()) {
			// Everything looks good!
			this.initPlayer();
		} else {
			// This browser does not have the minimum set of APIs we need.
			console.error('Browser not supported!');
		}
	}

	initPlayer() {
		let player = new shaka.Player(this.refs.video);
		const { setPlayer } = this.props
		// Listen for error events.
		player.addEventListener('error', this.onErrorEvent);

		setPlayer(player)


	}

	loadMenifest = () => {
		const { manifestUri, player } = this.props
		if (manifestUri) {
			player.load(manifestUri).then(function () {
				// This runs if the asynchronous load is successful.
				console.log('The video has now been loaded!');
			}).catch(this.onError);  // onError is executed if the asynchronous load fails.
		}
	}
	onErrorEvent(event) {
		// Extract the shaka.util.Error object from the event.
		this.onError(event.detail);
	}

	onError(error) {
		// Log the error.
		console.error('Error code', error.code, 'object', error);
	}

	componentWillUnmount() {

		// kill stream hogging...:)
	}

	render() {
		this.loadMenifest()
		return (

			<div className="row">
				<div className=
					"col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4">
					<audio ref="video"
						width="100%"
						height='30'
						controls autoPlay>
					</audio>
				</div>
			</div>



		);
	}
}

const mapStateToProps = ({ player, manifestUri }) => {

	return {
		player,
		manifestUri: manifestUri.length === 0 ? null : manifestUri
	}
}

export default connect(mapStateToProps, { setPlayer })(Player)