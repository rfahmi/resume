import React, {memo, useRef} from 'react';
import {Animated, Dimensions, StatusBar, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  TouchThroughView,
  TouchThroughWrapper,
} from 'react-native-touch-through-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import Toggle from '../../components/Toggle';
import ResumeAboutMe from '../../organism/resume/ResumeAboutMe';
import ResumeEducations from '../../organism/resume/ResumeEducations';
import ResumeExperiences from '../../organism/resume/ResumeExperiences';
import ResumeHeadline from '../../organism/resume/ResumeHeadline';
import ResumePortfolios from '../../organism/resume/ResumePortfolios';
import ResumeSkills from '../../organism/resume/ResumeSkills';
import {useTheme} from '../../utils/ThemeProvider';

const Home = ({navigation}) => {
  const {colors, isDark, setScheme} = useTheme();
  const scroll = useRef(new Animated.Value(0)).current;
  const panels = [
    'ResumeAboutMe',
    'ResumeSkills',
    'ResumeExperiences',
    'ResumeEducations',
    'ResumePortfolios',
  ];
  const _renderPanel = ({item}) => {
    return (
      <LinearGradient
        start={{x: 0.0, y: 1.0}}
        end={{x: 2.0, y: 0.0}}
        colors={
          isDark
            ? [colors.primaryLight, colors.secondaryLight]
            : [colors.primary, colors.secondary]
        }
        style={{
          padding: 16,
          borderRadius: 14,
          marginBottom: 16,
        }}>
        {item === 'ResumeAboutMe' ? (
          <ResumeAboutMe />
        ) : item === 'ResumeSkills' ? (
          <ResumeSkills />
        ) : item === 'ResumeExperiences' ? (
          <ResumeExperiences />
        ) : item === 'ResumeEducations' ? (
          <ResumeEducations />
        ) : item === 'ResumePortfolios' ? (
          <ResumePortfolios />
        ) : (
          <View />
        )}
      </LinearGradient>
    );
  };

  const keyExtractor = (item, index) => {
    return String(index + Date.now());
  };
  return (
    <View style={{backgroundColor: colors.background}}>
      <Header
        title="Resume"
        right={
          <View style={{flex: 0.6, marginRight: 16}}>
            <Toggle
              onPress={() => setScheme(isDark ? 'light' : 'dark')}
              initialState={!isDark}
              onText="Day"
              offText="Night"
            />
          </View>
        }
        translucent
      />
      <StatusBar
        translucent
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <ResumeHeadline
        opacity={scroll.interpolate({
          inputRange: [0, 400],
          outputRange: [1, 0],
        })}
        translateY={scroll.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -10],
        })}
      />
      <TouchThroughWrapper>
        <Animated.FlatList
          style={{
            paddingHorizontal: 16,
            marginBottom: 200,
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scroll}}}],
            {useNativeDriver: true},
          )}
          scrollEventThrottle={16}
          data={panels}
          renderItem={_renderPanel}
          keyExtractor={keyExtractor}
          ListHeaderComponent={() => (
            <>
              <TouchThroughView
                style={{
                  height: Dimensions.get('window').height * 0.45,
                }}
              />
              <Animated.View
                style={{
                  alignItems: 'center',
                  opacity: scroll.interpolate({
                    inputRange: [0, 100],
                    outputRange: [1, 0],
                  }),
                }}>
                <Icon name="chevron-up" size={36} color={colors.textSmooth} />
              </Animated.View>
            </>
          )}
          removeClippedSubviews
          initialNumToRender={1}
          maxToRenderPerBatch={1}
        />
      </TouchThroughWrapper>
    </View>
  );
};

export default memo(Home);
